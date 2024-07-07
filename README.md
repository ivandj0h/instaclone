# InstaClones

InstaClones is a social media app that allows users to share photos and videos with their friends. Users can follow other users, like and comment on posts, and send direct messages. The app is built using NextJS14 and Mysql.

## Features

The InstaClones have severar features like, upload picture, comments, likes, etc

## Installation

### Project Clone

```
git clone https://github.com/ivandi1980/instaclone.git
```

### Database MySQL Setup

```
CREATE DATABASE <your_database_name>
```

### Prisma ORM Setup

```
dotenv -e .env.local -- npx prisma generate
dotenv -e .env.local -- npx prisma migrate dev --name init
```

### Environment Setup
```
# .env.local
DATABASE_URL=mysql://root:@localhost:3306/instaclone_db
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret-key

```

