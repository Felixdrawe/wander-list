# WanderList

<p>
  <img src="https://img.shields.io/badge/React-19-%2361DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" height="30" />&#160;
  <img src="https://img.shields.io/badge/Vite-%23646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" height="30" />&#160;
  <img src="https://img.shields.io/badge/Zustand-%23805A3B?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTE2IDhDOC4yNjggOCAyIDE0LjI2OCAyIDIyczYuMjY4IDE0IDE0IDE0czE0LTYuMjY4IDE0LTE0UzIzLjczMiA4IDE2IDh6bTkgMTJjMCAxLjEwNS0uODk1IDItMiAyYy0uNzQgMC0xLjM4NS0uNDA0LTEuNzI5LTEuMDAzYy0xLjE3NC44MzctMi43NzYgMS4zMDMtNC40NTggMS4zMDNjLTEuODUzIDAtMy42MTEtLjU2OC00Ljg1NC0xLjU2MmMtLjMzMy41NjItLjkzNS45NDItMS42MjUuOTQyYy0xLjA1IDAtMS45LTAuODUtMS45LTEuOXMuODUtMS45IDEuOS0xLjljLjU4OSAwIDEuMTEzLjI2OSAxLjQ2My42ODVjMS4xOTQtLjg0OSAyLjc3MS0xLjMxMiA0LjQ0MS0xLjMxMmMxLjc2MiAwIDMuMzI1LjQ4MyA0LjQ4NCAxLjM3Yy4zNDgtLjQ0NS44OTMtLjczMyAxLjUwNy0uNzMzYzEuMTA1IDAgMiAuODk1IDIgMnoiLz48L3N2Zz4=" alt="Zustand" height="30" />&#160;
  <img src="https://img.shields.io/badge/ESLint-%234B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" height="30" />
</p>

A modern React packing list application to help travelers organize their belongings, built with Vite and Zustand for state management.

![WanderList App Demo](public/App.gif)

## Features

- ✅ **Interactive Checklist:** Easily check off items as you pack them
- 🔄 **Sorting Options:** Sort your items by name, packed status, or unpacked items first
- 💾 **Persistent Storage:** Your packing list is saved locally and persists between sessions
- 🧹 **Bulk Actions:** Mark all items as complete/incomplete or clear your list with a single click
- 🔄 **Reset Functionality:** Reset to the initial items list whenever needed
- 📱 **Responsive Design:** Works seamlessly across desktop and mobile devices
- 🏗️ **Modern Architecture:** Built with Zustand for efficient state management
- 🎨 **Clean UI:** Intuitive and visually appealing interface

## Tech Stack

<table>
  <tr>
    <td width="100">
      <picture>
        <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="React" width="65" height="65" />
      </picture>
      <br>React 19
    </td>
    <td width="100">
      <picture>
        <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="JavaScript" width="65" height="65" />
      </picture>
      <br>JavaScript
    </td>
    <td width="100" align="center">
      <picture>
        <img src="https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560" alt="Zustand" height="65" />
      </picture>
      <br>Zustand
    </td>
  </tr>
  <tr>
    <td width="100">
      <picture>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" width="65" height="65" />
      </picture>
      <br>CSS
    </td>
    <td width="100">
      <picture>
        <img src="https://vitejs.dev/logo-with-shadow.png" alt="Vite" width="65" height="65" />
      </picture>
      <br>Vite
    </td>
    <td width="100">
      <picture>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" alt="ESLint" width="65" height="65" />
      </picture>
      <br>ESLint
    </td>
  </tr>
</table>

## Implementation Highlights

- **Optimized Rendering:** Uses `useMemo` for efficient list sorting
- **Custom Store:** Zustand store with persist middleware for local storage
- **Component Organization:** Clean separation of concerns between components
- **Responsive Design:** Works well on all device sizes
- **Modern React Patterns:** Uses the latest React best practices

## Getting Started

1. 📥 Clone the repository
2. 📦 Install dependencies: `npm install`
3. ▶️ Start the development server: `npm run dev`
4. 🌐 Open your browser to the local server address shown in terminal

## Usage

- Add new items using the form at the top
- Click checkboxes to mark items as packed
- Use the dropdown to sort your items
- Use the button group at the bottom for bulk actions

---

This project demonstrates proficiency in React, state management with Zustand, sorting algorithms, local storage persistence, and modern React development patterns.
