# Volunteer Matching System

## Overview

This project aims to match volunteers to various locations based on their skills and proximity. The system uses clustering to group volunteers based on their skills, and then assigns them to different locations based on distance and the required skill sets. We used a combination of the K-Means clustering algorithm and a rule-based approach to achieve more precise results.


## Files Overview

1. **`volunteers.json`**: Contains the list of volunteers, their skills, and geographical locations (latitude, longitude). [required]
   
2. **`locations.json`**: Contains the list of locations, their skill requirements, and volunteer needs. [required]

3. **`volunteer_teams.json`**: Stores the balanced teams of volunteers based on clustering.

4. **`matched_volunteers.json`**: Contains the top volunteer-location matches for each volunteer.

5. **`grouped_volunteers.json`**: Groups volunteer-location matches by volunteer ID, showing all possible locations matched to each volunteer.


## How It Works

1. **Clustering Volunteers**: The K-Means clustering algorithm is applied to group volunteers based on their skill sets.

2. **Team Distribution**: Volunteers are grouped into balanced teams based on their clusters, ensuring that each team consists of volunteers with different skills.

3. **Matching Volunteers to Locations**: Volunteers are matched to locations based on:
   - Distance (calculated using the Haversine formula).
   - Skill match (volunteers' skills are compared with location requirements).
   - Location capacity (no location should exceed its volunteer requirements).

4. **Output**: The final volunteer assignments are saved into the following files:
   - `matched_volunteers.json`: Stores the top volunteer-location matches.
   - `grouped_volunteers.json`: Groups volunteer-location matches by volunteer ID.


