# :rocket: Reframe Objection

This starter scaffolds an app with:
- Frontend
  - Interactive views ([React](https://github.com/facebook/react))
  - SSR ([Goldpage](https://github.com/reframejs/goldpage))
- Backend
  - Node.js Server ([Hapi](https://github.com/hapijs/hapi))
  - API ([Wildcard](https://github.com/reframejs/wildcard-api))
  - Database ([SQLite](https://sqlite.org/))
  - ORM ([Objection.js](https://github.com/Vincit/objection.js))

Use this starter if:
- You need interactive views
- You need a Database
- You like SQL

[Objection.js](https://github.com/Vincit/objection.js) is an ORM that
stays out of your way &mdash; it makes it as easy as possible to use the full power of SQL.

[Wildcard](https://github.com/reframejs/wildcard-api) allows you to create an API simply by creating JavaScript functions.
This means that you can write SQL queries to expose data to your frontend.
You can use Wildcard as a secure SQL as API.

If SQL is your thing, you'll be pleased.

### Getting Started

1. Get the code.
   ~~~bash
   git clone git@github.com:reframejs/reframe-sql
   ~~~

2. Install the dependencies.
   ~~~bash
   cd reframe-sql/ && yarn install
   ~~~

2. Start the dev server.
   ~~~bash
   yarn dev
   ~~~

That's it: you can now go to [http://localhost:3000](http://localhost:3000) and start hacking.



