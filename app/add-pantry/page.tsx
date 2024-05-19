import AddPantryForm from "../components/add-pantry-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AddPantry() {
  return (
    <div className="flex min-h-screen w-full text-4xl m-auto flex-col container ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-left my-10">Add Pantry</h1>
        <Link href="/">
          <Button>Home</Button>
        </Link>
      </div>
      <AddPantryForm />
    </div>
  );
}
