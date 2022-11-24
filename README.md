#how to run
1. clone the repo
2. run npm install
3. copyy .env.sample to new file .env with desired credentials
4. run db migration yarn db:migrate
5. run db seed yarn db:seed

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--common\         # common files
 |--middlewares\    # Custom express middlewares
 |--models\         # Sequelize models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
```