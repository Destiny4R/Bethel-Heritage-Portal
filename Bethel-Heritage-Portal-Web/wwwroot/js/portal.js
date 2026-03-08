// ===== Bethel Heritage Portal - Shared JavaScript =====

// Sidebar toggle (mobile)
document.addEventListener('DOMContentLoaded', function () {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebarOverlay');
    var toggleBtn = document.getElementById('sidebarToggle');

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    if (toggleBtn) toggleBtn.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', toggleSidebar);
});

// Filter table rows by search query
function filterTable(tableId, query) {
    var table = document.getElementById(tableId);
    var rows = table.getElementsByTagName('tr');
    var q = query.toLowerCase();
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = rows[i].innerText.toLowerCase().includes(q) ? '' : 'none';
    }
}
