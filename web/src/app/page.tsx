import { Client } from "core";

const client = new Client("connection");

export default async function Home() {
  // I can't run 'client-migrate()' here, because the migrations are only part of the 'core' package
  // I would love to run migrations in my apps as part of startup routine (e.g. in Next or a Node.js backend)
  // However I want to manage migrations in the core package, because that's where my schemas live
  // What are good strategies to achieve this?
  // Alternatives I thought of: Copy migrations from 'core' into every app OR do not run migrations in here
  // but manually in dev or via CI script on deployment
  await client.migrate();
  await client.createCountry({ name: "Chile" });
  const countries = await client.getCountries();
  return (
    <div>
      {countries.map((country) => {
        return <div key={country.id}>{country.name}</div>;
      })}
    </div>
  );
}
