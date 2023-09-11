import { fetchUser, fetchUsers } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import UserCard from "../cards/UserCard";
import CommunityCard from "../cards/CommunityCard";
import { fetchCommunities } from "@/lib/actions/community.actions";

async function Rightbar() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const result1 = await fetchUsers({
    userId: user.id,
  });

  const result = await fetchCommunities({
    pageSize: 25,
  });

  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1 text-center">Suggested Users</h3>
        <div className="mt-5 flex flex-col gap-9">
          {result1.users.length === 0 ? (
            <p className="no-result">No Result</p>
          ) : (
            <>
              {result1.users.map((person) => (
                <UserCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  username={person.username}
                  imgUrl={person.image}
                  personType="User"
                />
              ))}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1 text-center">
          Suggested Communities
        </h3>
        <section className="mt-5 flex flex-col gap-9">
          {result.communities.length === 0 ? (
            <p className="no-result">No Result</p>
          ) : (
            <>
              {result.communities.map((community) => (
                <CommunityCard
                  key={community.id}
                  id={community.id}
                  name={community.name}
                  username={community.username}
                  imgUrl={community.image}
                  bio={community.bio}
                  members={community.members}
                />
              ))}
            </>
          )}
        </section>
      </div>
    </section>
  );
}

export default Rightbar;
