import React from "react";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.action";
import PostThread from "@/components/forms/PostThread";

const page = async () => {
  const user = await currentUser();

  if (!user) return null;

  // this gets the user details from the database if he's currently logged in
  const userInfo = await fetchUser(user.id);

  // if the user is not onboarded then send him to the onboarding page first.
  if (!userInfo?.onboarded) redirect("/onboarding"); 
  return (
    <div>
      <h1 className="head-text">Create Thread</h1>
      <PostThread userId={userInfo._id} />
    </div>
  );
};

export default page;
