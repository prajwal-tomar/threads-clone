import { fetchUser, fetchUsers } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import UserCard from "../cards/UserCard";

async function Rightbar() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const result = await fetchUsers({
    userId: user.id,
  });
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">
          Suggested User
          <div className="mt-14 flex flex-col gap-9">
            {result.users.length === 0 ? (
              <p className="no-result">No Result</p>
            ) : (
              <>
                {result.users.map((person) => (
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
        </h3>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">Suggested Communities</h3>
      </div>
    </section>
  );
}

export default Rightbar;
