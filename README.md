# Fyle Web Development Project

Welcome to the Fyle Web Development project repository! This web application allows users to explore GitHub repositories, search for repositories, and view details about each repository.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Search Repositories](#search-repositories)
  - [Pagination](#pagination)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of GitHub repositories.
- Search repositories by name.
- Navigate through paginated results.
- View repository details, including the name, description, and languages used.

## WorkFlow

Workflow Overview:
1. Initial Loading:
When the application loads, it fetches the repositories of a default GitHub user (c9s in your case).
The default user's profile information, including the profile picture, username, bio, location, and profile link, is displayed at the top.

2. Repositories Display:
The repositories are displayed in a list, showing repository name, description, and language details.
By default, it displays 10 repositories per page, and users can choose the number of repositories per page (10, 20, 50, or 100) using the dropdown.

3. Pagination:

Users can navigate through the repositories using pagination buttons (Previous and Next).
The pagination is currently client-side, but you may consider implementing server-side pagination for more efficient handling of a large number of repositories.

4. Search Functionality:
Users can enter a search term in the search bar to filter repositories based on the repository name.
The search is case-insensitive, and it filters repositories dynamically as the user types.

5. Individual Repository Details:
Each repository is displayed with a link to the GitHub page, repository name, description (if available), and up to four languages in individual boxes.

6. Profile Section:
The profile section at the top-left displays the user's profile picture, username, bio, location, and a clickable link to the GitHub profile.

7. Dynamic User Change:

Users can change the GitHub username in the search bar to explore repositories of a different GitHub user.
The user can press the "Search" button or hit Enter to load repositories for the new user.

8. GitHub Profile Link:
The GitHub profile link in the profile section is clickable, allowing users to visit the GitHub profile of the displayed user.


### Prerequisites

Before you begin, ensure you have met the following requirements:

- Web browser (Google Chrome, Mozilla Firefox, etc.)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Vineet9900/Fyle-Web-Development.git
