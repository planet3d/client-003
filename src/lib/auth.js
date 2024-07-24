// lib/auth.js
import { lucia } from '@lucia-auth/nextjs';
import { pgAdapter } from '@lucia-auth/postgresql';
import { Pool } from 'pg';

// PostgreSQL kapcsolati pool létrehozása
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const auth = lucia({
  adapter: pgAdapter(pool),
  secret: process.env.LUCIA_SECRET,
  env: process.env.NODE_ENV === 'production' ? 'PROD' : 'DEV',
});

