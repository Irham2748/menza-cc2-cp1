"use client";

import Image from "next/image";
import { NextPage } from "next";
import React, { useState, useEffect } from "react";

const RandomUsersPage: NextPage = () => {
  const [userList, setUserList] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=8");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserList(data.results);
      } catch (error) {
        setError("Failed to fetch user data");
      }
    };

    fetchData();
  }, []);

  return (
    <section>
        <div className="flex flex-wrap justify-center">
          <h2 className="text-3xl font-bold text-dark text-center mx-auto mt-4">
            Our Teams
          </h2>
        {error && <p>{error}</p>}
        {userList.length > 0 && (
          <div className="lg:gap-xl-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4">
            {userList.map((user: any, index: number) => (
              <div
                key={index}
                className="border p-4 rounded-2xl border-dark bg-dark"
              >
                <Image
                  className="rounded-t-lg"
                  width={300}
                  height={200}
                  src={user.picture.large}
                  alt="avatar"
                  loading="lazy"
                />
                <div className="border rounded-b-lg text-center bg-slate-700 z-10 text-white">
                  <h5 className="text-lg font-medium">
                    {user.name.title} {user.name.first} {user.name.last}
                  </h5>
                  <hr />
                  <p>{user.gender}</p>
                  <hr />
                  <p>{user.email}</p>
                  <hr />
                  <p>{user.phone}</p>
                  <hr />
                  <p>{user.location.city}</p>
                  <hr />
                  <p>{user.location.country}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RandomUsersPage;
