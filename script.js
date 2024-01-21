// script.js

const username = 'c9s';
let page = 1;
let perPage = 10;



function setProfileUsername(newUsername) {
    username = newUsername;
    // Call the fetchRepositories function or any other function that uses the username
    fetchRepositories();
}

function fetchRepositories() {
    document.getElementById('loader').style.display = 'block';

    const apiUrl = `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('loader').style.display = 'none';
            displayRepositories(data);
        })
        .catch(error => console.error('Error fetching repositories:', error));
}

// script.js

// ... (existing code)

function searchRepositories() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const repositories = document.querySelectorAll('.repository');

    repositories.forEach(repo => {
        const repoName = repo.querySelector('.repo-header h2 a').innerText.toLowerCase();

        if (repoName.includes(searchTerm)) {
            repo.style.display = 'block';
        } else {
            repo.style.display = 'none';
        }
    });
}

// ... (remaining code)


// ... (existing code)

// Modify the formatLanguages function
async function formatLanguages(repo) {
    const apiUrl = repo.languages_url;

    try {
        const response = await fetch(apiUrl);
        const languagesData = await response.json();
        const languages = Object.keys(languagesData);

        // Display up to four languages in individual boxes
        if (languages.length > 0) {
            const limitedLanguages = languages.slice(0, 4);
            return limitedLanguages.map(lang => `<div class="language-box"><span class="language">${lang}</span></div>`).join('');
        }
    } catch (error) {
        console.error('Error fetching languages:', error);
    }

    return '';
}

// Modify the displayRepositories function
async function displayRepositories(repositories) {
    const repositoriesList = document.getElementById('repositoriesList');
    repositoriesList.innerHTML = '';

    for (const repo of repositories) {
        const repoElement = document.createElement('div');
        repoElement.className = 'repository';

        repoElement.innerHTML = `
            <div class="repo-header">
                <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
                <p>${repo.description || 'No description provided'}</p>
            </div>
            <div class="repo-details">
                <div class="language-box">${await formatLanguages(repo)}</div>
            </div>
        `;

        repositoriesList.appendChild(repoElement);
    }
}

// ... (existing code)

document.addEventListener('DOMContentLoaded', fetchRepositories);


function nextPage() {
    page++;
    fetchRepositories();
}

function previousPage() {
    if (page > 1) {
        page--;
        fetchRepositories();
    }
}

function changePerPage() {
    perPage = parseInt(document.getElementById('perPage').value, 10);
    page = 1;
    fetchRepositories();
}

document.addEventListener('DOMContentLoaded', fetchRepositories);
