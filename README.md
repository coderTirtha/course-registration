# Course Registration 

## Key Features: 
- All the courses are dynamically loaded by React Components and data updated by React Hooks
- As one select any course, the total credit hours and total price updates and Remaining Credit hours decreases 
- If select button is pressed more than once and total credit hours goes more than 20, It shows a modal alert!

## State Management: 
- Here selection is managed by state. When one press the selection button, the event-handler is triggered and it commits a search in the state if the course is added previously or not by Array `find` method! If the course is added previously, it doesn't update any State. Rather, it shows a warning via modal! But if the course is not in the State, it adds the course in the State and updates the `selectedCourse`, `price`, `remainingCredit` and `hours` States respectively. 