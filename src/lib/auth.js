// lib/auth.js
import { lucia } from '@lucia-auth/nextjs';
import { pgAdapter } from '@lucia-auth/postgresql';
import { createPool } from 'pg';

const pool = createPool({
  connectionString: process.env.DATABASE_URL, // Vercel integrációhoz
});

export const auth = lucia({
  adapter: pgAdapter(pool),
  secret: process.env.LUCIA_SECRET, // Ezt a környezeti változók közé kell felvenni
  env: process.env.NODE_ENV === 'production' ? 'PROD' : 'DEV',
});
