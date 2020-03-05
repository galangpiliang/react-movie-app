import React from "react";
import "./Overview.scss";

export default function Overview() {
  return (
    <div className="Overview">
      <div className="synopsis">
        <h3>
          <span>Synopsis</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          voluptates distinctio reiciendis, incidunt repellendus voluptatum
          numquam dolores repellat cumque, voluptate odit odio aut aliquid autem
          eius iste. Ad, ratione? Modi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          voluptate, optio incidunt dolores, perferendis quos soluta
          necessitatibus sint impedit laboriosam quisquam vero quia at! Ex culpa
          rerum vel minus animi!
        </p>
      </div>
      <div className="info">
        <h3>
          <span>Movie info</span>
        </h3>
        <div className="detail flex column">
          <p>
            <strong>Release date</strong> : January 5, 1996
          </p>
          <p>
            <strong>Release date</strong> : January 5, 1996
          </p>
          <p>
            <strong>Release date</strong> : January 5, 1996
          </p>
          <p>
            <strong>Release date</strong> : January 5, 1996
          </p>
        </div>
      </div>
    </div>
  );
}
