# Q_2-corona_hmo
מערכת ניהול קורונה לקופת חולים, המערכת שומרת מאגר נתונים המכיל את כל חברי הקופה וכן פרטי מפתח לגבי מגפת הקורונה בהקשרי החברים בקופת חולים (כמו כן, המערכת שומרת בטבלה מיוחדת את יצרני החיסונים בשוק עם קוד חיסון עבור כל יצרן). 
# צד שרת 
המערכת מאפשרת הכנסה ושליפה של נתונים ממאגר הנתונים של קופת החולים תוך שמירה על תקינות הקלט באמצעות middlewares מיוחדים בעת הכנסת חבר חדש לקופת החולים.  
# צד לקוח
המערכת מאפשרת רישום חברים חדשים לקופת החולים בממשק גרפי יעיל ונוח עם אפשרות להעלאת תמונה לשרת.

# אופן השימוש
![image](https://github.com/ruth-katzir/Q_2-corona_hmo/assets/133040769/ebbc75b3-96c1-4954-b9ed-736fdf16f84b)

![image](https://github.com/ruth-katzir/Q_2-corona_hmo/assets/133040769/5f735463-a3c8-49ea-9a03-d0593219d1a5)

אפשרות להעלאת תמונה:
![image](https://github.com/ruth-katzir/Q_2-corona_hmo/assets/133040769/626f25f8-8754-4768-bb53-83fcc8db8916)

בנוסף לכך, המערכת מאפשרת להציג את התמונה שהועלתה בעת ההרשמה ע"פ מספר ת.ז. של חבר הקופה:

![image](https://github.com/ruth-katzir/Q_2-corona_hmo/assets/133040769/95aa913d-3bd9-4d0c-9d41-8fc55051cab2)

לאחר לחיצה על הכפתור:

![image](https://github.com/ruth-katzir/Q_2-corona_hmo/assets/133040769/e7ff0e00-b09c-44be-9746-d12eb567ad04)



אפשרות נוספת שמספקת המערכת היא לצפות בגרף המייצג את כמות החברים בקופה שנמצאו חיוביים לקורונה בכל יום בחודש באחרון וכן את מספר חברי הקופה שלא התחסנו כלל, לדוג':
![image](https://github.com/ruth-katzir/Q_2-corona_hmo/assets/133040769/76c7baf2-4ff4-4985-af34-bb4e9badd88b)




# תלויות חיצוניות

For a project in VS Code that uses Node.js, React, MySQL with Sequelize ORM, Express, and Axios, you will need the following external dependencies:

1. Node.js: A JavaScript runtime environment. You can download and install it from the official Node.js website: https://nodejs.org

2. React: A JavaScript library for building user interfaces. React is typically installed as a project dependency using npm or yarn. To install React, open a terminal in your project's root directory and run the following command:
   ```
   npm install react
   ```

3. MySQL: A popular relational database management system. You need to install MySQL server on your machine. You can download it from the official MySQL website: https://www.mysql.com/downloads/

4. Sequelize: A promise-based ORM for Node.js that supports various databases, including MySQL. To install Sequelize, open a terminal in your project's root directory and run the following command:
   ```
   npm install sequelize
   ```

5. Express: A fast and minimalist web application framework for Node.js. To install Express, open a terminal in your project's root directory and run the following command:
   ```
   npm install express
   ```

6. Axios: A popular HTTP client library for making API requests from Node.js or browsers. To install Axios, open a terminal in your project's root directory and run the following command:
   ```
   npm install axios
   ```

These are the essential dependencies for your Node.js, React, MySQL with Sequelize ORM, Express, and Axios project. Remember to run these commands in the root directory of your project, where the `package.json` file is located. The dependencies will be installed and managed by npm (Node Package Manager) or yarn.

Make sure to import and require the necessary modules in your project files to utilize their functionality effectively.
