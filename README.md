# Streamify Dashboard - SpeedyBrand

- **Hosted Link** - [https://streamify-speedy-labs.vercel.app/](https://streamify-speedy-labs.vercel.app/)
- Desktop : 
   - <img width="1792" alt="Screenshot 2024-09-09 at 7 54 27 PM" src="https://github.com/user-attachments/assets/c65a3c3f-2f9c-4b24-b950-ca2c6e644c6a">
   - <img width="1792" alt="Screenshot 2024-09-09 at 7 54 19 PM" src="https://github.com/user-attachments/assets/3b12bd69-0d00-4d30-a0dd-149cd6c678a0">

## Thought Process
The primary objective of this project was to build an analytics dashboard for a fictional music streaming service, "Streamify," that provides key insights into user activity, revenue generation, and content performance. My approach focused on creating a user-friendly, responsive, and visually appealing dashboard using modern web technologies.

### Key factors I considered:
- **UI/UX**: The design should be clean, minimal, and adaptable to various screen sizes. Usability and clarity were top priorities.
- **Performance**: Optimizing load times and avoiding unnecessary re-renders were crucial. I implemented lazy loading and code-splitting techniques to improve performance.
- **Interactivity**: I incorporated interactive charts and tables that enable the user to hover over data points for detailed insights and perform sorting and filtering operations.

### Additional Considerations:
- **Mocked Data**: To simulate real-time analytics, I created realistic mock data for user activity, revenue breakdown, and song streaming history.
- **Chart Interactions**: Users can interact with the charts, hover to see details, and filter the data based on selections.

## Instructions to Run

1. **Clone the repository:**

   ```bash
   git clone <repository-link>

2. **Install dependencies:**

   ```bash
   npm install

3. **Run the development server:**

   ```bash
   npm start

4. **View the application in your browser:**
   Open http://localhost:5173 to view the app locally.

**Deploying the app (optional):**
You can deploy this app using services like Vercel or Netlify by connecting your repository and following the hosting service’s deployment instructions.

##   References/Libraries Used
- React Tremor - Used for creating the interactive charts and visualizations (e.g., User Growth, Revenue Distribution, Top Streamed Songs).
[Tremor React Library Documentation](https://tremor.so/docs/getting-started/installation)

- shadcn/ui - Utilized for the Data Table, sorting/filtering functionalities, and UI components.
[shadcn UI Library Documentation](https://ui.shadcn.com/docs)

- Tailwind CSS - Used as the primary CSS framework for responsive design and styling.
[Tailwind CSS Documentation](https://v2.tailwindcss.com/docs)

- React - For building the single-page application.
[React Documentation](https://react.dev/learn/installation)

- React Context API - For state management to manage global state across the dashboard.
[React Context API Documentation](https://reactjs.org/docs/context.html)


## Building a Music Streaming Analytics Dashboard

**Dashboard Overview:**
This is a single-page application (SPA) that includes the following sections:

**Key Metrics:**
- Total Users
- Active Users
- Total Streams
- Revenue
- Top Artist

**Data Visualization:**
- User Growth Chart (line chart)
- Revenue Distribution (pie chart)
- Top 5 Streamed Songs (bar chart)

**Data Table:**
- List of recent streams with columns for Song Name, Artist, Date Streamed, Stream Count, and User ID.

**User Interaction Features:**
- Sorting & Filtering: The data table allows sorting by Date or Stream Count and filtering by Artist or Song Name.
- Chart Interactions: Hovering over points in the charts displays exact numbers, and clicking on revenue sources filters the data table.

**Bonus Features:**
- Responsive Design: The dashboard is fully responsive and adapts well to different screen sizes.
- Optimized Performance: Implemented lazy loading and code splitting to improve load times and minimize re-renders.

## Screenshots
- Mobile/iPhone:
  - <img src="https://github.com/user-attachments/assets/f9e41d8e-5a53-460f-90a6-6b8207e9339c" alt="mobileScreenshot1" width="600"/>
  - <img src="https://github.com/user-attachments/assets/090b0c5c-9323-4c04-8b71-eb9f2e361c51" alt="mobileScreenshot2" width="600"/>

- Tablet/iPad: 
![IMG_F1D2EDB28C68-1](https://github.com/user-attachments/assets/1dcf9746-40ef-448e-a39d-9d20ea7bbd46)
![IMG_6875F61808DA-1](https://github.com/user-attachments/assets/8f7353e9-d36c-45e9-8370-aa4fc0b2503c)

