async function loadDashboard() {
  try {
    // Summary
    const summaryRes = await fetch('/api/summary');
    const summary = await summaryRes.json();

    if (summary.success) {
      document.getElementById('sales').textContent = '$' + summary.totalSales.toLocaleString();
      document.getElementById('profit').textContent = '$' + summary.totalProfit.toLocaleString();
      document.getElementById('status').textContent = '✅ Online';
    }

    // Table
    const salesRes = await fetch('/api/sales');
    const salesData = await salesRes.json();

    if (salesData.success) {
      const tbody = document.getElementById('tableBody');
      tbody.innerHTML = '';
      salesData.data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.month}</td>
          <td>$${item.sales.toLocaleString()}</td>
          <td>$${item.profit.toLocaleString()}</td>
        `;
        tbody.appendChild(row);
      });
    }
  } catch (e) {
    console.error('Error loading dashboard:', e);
    document.getElementById('status').textContent = '⚠️ Error';
  }
}

document.addEventListener('DOMContentLoaded', loadDashboard);
