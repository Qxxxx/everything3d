import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <p>home</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default page;
