import { useLocation } from "react-router-dom";
export default function Contact() {
  const querystring = useLocation().search;
  const queryParams = new URLSearchParams(querystring);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>hey {name} Contact</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
        nihil laudantium error vero modi praesentium officia commodi quas nam
        fugiat quidem officiis suscipit, odit aut! Nihil cumque voluptates
        dolores suscipit laboriosam officia perferendis minima maiores hic
        blanditiis reiciendis libero tempora, commodi molestiae est rem quod
        voluptate doloribus sit aliquid. Impedit?
      </p>
    </div>
  );
}
