import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect('/dashboard')
  }
  return (
    <div>


      <section className="flex items-center justify-center bg-background h-[90vh]">
        <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <span className="w-auto px-6 py-3 rounded-full bg-secondary">
                <span className="text-sm font-medium text-primary">
                  Streamline feedback and improvements
                </span>

              </span>
              <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
                Create feedback forms with ease
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eveniet, laboriosam, animi voluptatum officiis, expedita recusandae debitis dolores iste aperiam accusamus autem eaque corrupti repellat id enim ratione. Dicta, laudantium.</p>
            </div>
            <div>

              <div className="flex justify-center max-w-sm mx-auto mt-10">
                <Button size="lg" className="w-full">Join the waitlist</Button>
                {/*
              <RegisterLink>
                <Button size="lg" className="w-full">Sign Up for free</Button>
              </RegisterLink>
              */}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="flex items-center justify-center bg-background h-[90vh]">
        <h1>hi</h1>
      </section>
    </div>
  );
}
