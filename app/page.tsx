import PantryTable from "./components/pantry-table";
import { db } from "./db";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = async () => {
  // const items = await db.query.testing.findMany();
  return (
    <div className="flex min-h-screen w-full text-4xl text-center m-auto flex-col container ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-left my-10">
          Welcome to Pantry Tracker
        </h1>
        <Link href="/add-pantry">
          <Button>Add Pantry</Button>
        </Link>
      </div>
      <PantryTable />
    </div>
  );
};

export default Home;
