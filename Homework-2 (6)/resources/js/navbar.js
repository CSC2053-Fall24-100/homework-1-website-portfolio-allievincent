function loadNavbar() {
    const navbar = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="schedule.html">Fall 2024 Schedule</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="hobbies.html">Hobbies</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
    document.getElementById('navbar-container').innerHTML = navbar;
}
