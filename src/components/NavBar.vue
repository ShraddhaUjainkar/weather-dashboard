<template>
    <nav class="navbar">
        <div class="nav-item">
            <div class="logo">
                <h1>Weather Dashboard</h1>
            </div>
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/sports">Sports</router-link>
                </li>
                <li>
                    <router-link to="/headlines">Headlines</router-link>
                </li>
            </ul>
        </div>
    
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
};
</script>

<style scoped>
.navbar {
    background-color: transparent;
    padding: 15px;
    color: white;
}

.navbar .logo h1 {
    margin: 0;
    font-size: 24px;
}

.navbar ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
}

.navbar ul li {
    display: inline;
}

.navbar ul li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
}

.navbar ul li a:hover {
    text-decoration: underline;
}

.navbar ul li .router-link-active {
    text-decoration: underline;
}

.nav-item {
    margin: 0 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
