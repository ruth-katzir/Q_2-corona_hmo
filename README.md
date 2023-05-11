# Q_2-corona_hmo
מערכת ניהול קורונה לקופת חולים, המערכת שומרת מאגר נתונים המכיל את כל חברי הקופה וכן פרטי מפתח לגבי מגפת הקורונה בהקשרי החברים בקופת חולים (כמו כן, המערכת שומרת בטבלה מיוחדת את יצרני החיסונים בשוק עם קוד חיסון עבור כל יצרן). 
# צד שרת 
המערכת מאפשרת הכנסה ושליפה של נתונים ממאגר הנתונים של קופת החולים תוך שמירה על תקינות הקלט באמצעות middlewares מיוחדים בעת הכנסת חבר חדש לקופת החולים.
# קריאות API
//members
get: http://localhost:3600/api/member
![image](https://github.com/ruth-katzir/Q_2-corona_hmo/assets/133040769/f42ce593-29d2-4cbb-b4ac-25aec4338025)
getById: http://localhost:3600/api/member/213398738
![image](https://github.com/ruth-katzir/Q_2-corona_hmo/assets/133040769/0bd496ea-ea3d-4ad9-b976-c600a61d343d)
post: http://localhost:3600/api/member
![image](https://github.com/ruth-katzir/Q_2-corona_hmo/assets/133040769/b023cc37-4209-4301-b793-0de0c9b73152)

//morbidity
getAll: http://localhost:3600/api/morbidity
![image](https://github.com/ruth-katzir/Q_2-corona_hmo/assets/133040769/5010becc-8843-40b4-a7f7-356d71d009d8)
getById: http://localhost:3600/api/morbidity/213398738
![image](https://github.com/ruth-katzir/Q_2-corona_hmo/assets/133040769/b22365c3-0016-422c-accf-47113b0a3270)
post: http://localhost:3600/api/morbidity

//vaccine
get: http://localhost:3600/api/vaccine
//getByCode: http://localhost:3600/api/vaccine/1
post: http://localhost:3600/api/vaccine
![image](https://github.com/ruth-katzir/Q_2-corona_hmo/assets/133040769/c5a7c531-8328-469b-8128-8130a7b5a777)

//vaccination
get: http://localhost:3600/api/vaccination
![image](https://github.com/ruth-katzir/Q_2-corona_hmo/assets/133040769/672f4111-4d66-467b-8309-75992b307990)
getById: http://localhost:3600/api/vaccination/213398738
![image](https://github.com/ruth-katzir/Q_2-corona_hmo/assets/133040769/9c98cb5e-720b-4663-934f-812ce3a759ad)
post: http://localhost:3600/api/vaccination
![Uploading image.png…]()


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

To set up a that project in VS Code using Node.js, React, MySQL with Sequelize ORM, Express, Axios, body-parser, cors, cookie-parser, express-validator, and dotenv, you will need the following external dependencies:

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

7. body-parser: A middleware for parsing HTTP request bodies. To install body-parser, open a terminal in your project's root directory and run the following command:
   ```
   npm install body-parser
   ```

8. cors: A middleware for enabling Cross-Origin Resource Sharing (CORS) in Express. To install cors, open a terminal in your project's root directory and run the following command:
   ```
   npm install cors
   ```

9. express-validator: A set of express.js middlewares for input validation. To install express-validator, open a terminal in your project's root directory and run the following command:
    ```
    npm install express-validator
    ```

10. dotenv: A module for loading environment variables from a .env file. To install dotenv, open a terminal in your project's root directory and run the following command:
    ```
    npm install dotenv
    ```

These are the essential dependencies for your Node.js, React, MySQL with Sequelize ORM, Express, Axios, body-parser, cors, cookie-parser, express-validator, and dotenv project. Remember to run these commands in the root directory of your project, where the package.json file is located. The dependencies will be installed and managed by npm (Node Package Manager) or yarn.

Make sure to import and require the necessary modules in your project files to utilize their functionality effectively.

# הרמת השירותים השונים

To set up the dependencies for your project, follow these steps:

1. Create a new project directory or navigate to an existing project directory in your terminal.

2. Initialize a new Node.js project by running the following command:
   ```
   npm init
   ```

   This will create a `package.json` file in your project directory.

3. Install each dependency using the `npm install` command. For example, to install React, you would run:
   ```
   npm install react
   ```

   Repeat this step for each dependency you want to install, using the corresponding package name.

4. After installing all the dependencies, your `package.json` file will contain a `dependencies` section with the installed packages.

That's it! You have successfully set up the dependencies for your project. You can now start using the installed packages and their functionalities in your project's code.
