import { useRef } from "react";

export default function ScrollPage() {
  const paragraphOneRef = useRef(null);
  const paragraphTwoRef = useRef(null);
  const paragraphThreeRef = useRef(null);

  const handleClickParagrapheOne = () => {
    // scroller jusqu'au paragraphe 1
    paragraphOneRef.current.scrollIntoView({
        behavior: 'smooth'
    });
    } 

  const handleClickParagrapheTwo = () => {
    paragraphTwoRef.current.scrollIntoView({
        behavior: 'smooth'
    });
  };

  const handleClickParagrapheThree = () => {
    paragraphThreeRef.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section>
      <div className="d-flex justify-content-center gap-2">
        <button
          onClick={handleClickParagrapheOne}
          type="button"
          className="btn btn-outline-danger"
        >
          1
        </button>
        <button
          onClick={handleClickParagrapheTwo}
          type="button"
          className="btn btn-outline-success"
        >
          2
        </button>
        <button
          onClick={handleClickParagrapheThree}
          type="button"
          className="btn btn-outline-info"
        >
          3
        </button>
      </div>
      <p ref={paragraphOneRef} className="bg-danger-subtle p-3 mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta
        nemo quae delectus facilis facere totam mollitia architecto optio est
        saepe debitis odit obcaecati earum aliquam, maiores ipsa ratione
        suscipit? Itaque enim veritatis officia quidem, dolores optio blanditiis
        obcaecati commodi libero mollitia ut iure nisi harum earum illo maiores!
        Blanditiis illo fugit quam earum aperiam quia porro vel beatae ea?
        Voluptas hic blanditiis voluptatum consectetur adipisci obcaecati nam
        alias explicabo. Vitae vel earum voluptate, eum blanditiis fugit quae
        consequatur quaerat et, nisi maxime inventore vero facilis minima amet
        asperiores ipsam. Adipisci dignissimos, non repellat consectetur
        necessitatibus officia minima beatae nisi nulla fugiat voluptatem
        aliquid excepturi ipsam, veniam, doloremque error velit aut accusamus
        rem eius at. Officia quisquam nulla nam cupiditate. Ad rerum accusantium
        magnam optio! Vitae quod dicta sapiente laudantium saepe mollitia odit
        velit sequi et consectetur, voluptates, eveniet, exercitationem
        perferendis ad possimus voluptatum consequuntur a totam neque labore?
        Sed. Error tempora omnis maxime nihil dicta, totam perspiciatis iure ut
        distinctio inventore praesentium enim. Ipsa perspiciatis magnam nulla
        placeat quos, totam necessitatibus ipsam quia et aut praesentium neque
        cum? Laudantium! Repudiandae, excepturi nesciunt. Unde accusantium magni
        eligendi quod? Pariatur expedita minima ducimus deserunt omnis quam
        deleniti ut repudiandae asperiores perspiciatis, fugiat in! Dignissimos
        mollitia eaque porro error veritatis inventore nesciunt. Dolores ipsa,
        voluptatum officia odio impedit sit exercitationem a, ad delectus iste
        temporibus optio tempore esse vero quod consequuntur iure, minima
        perspiciatis! Voluptates, cum voluptas. Velit aut doloribus repudiandae
        doloremque! Accusamus reprehenderit alias voluptate. Temporibus amet
        maxime quis dolor suscipit, a veniam perspiciatis saepe corrupti facere,
        sed quod. Atque quia, error eum voluptates ad ab suscipit distinctio
        commodi sequi consequatur? Aut quos veniam itaque dolorum. Perferendis
        ipsa eos repellendus, iure cupiditate excepturi similique maxime
        voluptatibus inventore fuga blanditiis illo accusantium, mollitia minus
        dolor consectetur debitis adipisci praesentium suscipit ea error.
      </p>
      <p ref={paragraphTwoRef} className="bg-success-subtle p-3 mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta
        nemo quae delectus facilis facere totam mollitia architecto optio est
        saepe debitis odit obcaecati earum aliquam, maiores ipsa ratione
        suscipit? Itaque enim veritatis officia quidem, dolores optio blanditiis
        obcaecati commodi libero mollitia ut iure nisi harum earum illo maiores!
        Blanditiis illo fugit quam earum aperiam quia porro vel beatae ea?
        Voluptas hic blanditiis voluptatum consectetur adipisci obcaecati nam
        alias explicabo. Vitae vel earum voluptate, eum blanditiis fugit quae
        consequatur quaerat et, nisi maxime inventore vero facilis minima amet
        asperiores ipsam. Adipisci dignissimos, non repellat consectetur
        necessitatibus officia minima beatae nisi nulla fugiat voluptatem
        aliquid excepturi ipsam, veniam, doloremque error velit aut accusamus
        rem eius at. Officia quisquam nulla nam cupiditate. Ad rerum accusantium
        magnam optio! Vitae quod dicta sapiente laudantium saepe mollitia odit
        velit sequi et consectetur, voluptates, eveniet, exercitationem
        perferendis ad possimus voluptatum consequuntur a totam neque labore?
        Sed. Error tempora omnis maxime nihil dicta, totam perspiciatis iure ut
        distinctio inventore praesentium enim. Ipsa perspiciatis magnam nulla
        placeat quos, totam necessitatibus ipsam quia et aut praesentium neque
        cum? Laudantium! Repudiandae, excepturi nesciunt. Unde accusantium magni
        eligendi quod? Pariatur expedita minima ducimus deserunt omnis quam
        deleniti ut repudiandae asperiores perspiciatis, fugiat in! Dignissimos
        mollitia eaque porro error veritatis inventore nesciunt. Dolores ipsa,
        voluptatum officia odio impedit sit exercitationem a, ad delectus iste
        temporibus optio tempore esse vero quod consequuntur iure, minima
        perspiciatis! Voluptates, cum voluptas. Velit aut doloribus repudiandae
        doloremque! Accusamus reprehenderit alias voluptate. Temporibus amet
        maxime quis dolor suscipit, a veniam perspiciatis saepe corrupti facere,
        sed quod. Atque quia, error eum voluptates ad ab suscipit distinctio
        commodi sequi consequatur? Aut quos veniam itaque dolorum. Perferendis
        ipsa eos repellendus, iure cupiditate excepturi similique maxime
        voluptatibus inventore fuga blanditiis illo accusantium, mollitia minus
        dolor consectetur debitis adipisci praesentium suscipit ea error.
      </p>
      <p ref={paragraphThreeRef} className="bg-info-subtle p-3 mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta
        nemo quae delectus facilis facere totam mollitia architecto optio est
        saepe debitis odit obcaecati earum aliquam, maiores ipsa ratione
        suscipit? Itaque enim veritatis officia quidem, dolores optio blanditiis
        obcaecati commodi libero mollitia ut iure nisi harum earum illo maiores!
        Blanditiis illo fugit quam earum aperiam quia porro vel beatae ea?
        Voluptas hic blanditiis voluptatum consectetur adipisci obcaecati nam
        alias explicabo. Vitae vel earum voluptate, eum blanditiis fugit quae
        consequatur quaerat et, nisi maxime inventore vero facilis minima amet
        asperiores ipsam. Adipisci dignissimos, non repellat consectetur
        necessitatibus officia minima beatae nisi nulla fugiat voluptatem
        aliquid excepturi ipsam, veniam, doloremque error velit aut accusamus
        rem eius at. Officia quisquam nulla nam cupiditate. Ad rerum accusantium
        magnam optio! Vitae quod dicta sapiente laudantium saepe mollitia odit
        velit sequi et consectetur, voluptates, eveniet, exercitationem
        perferendis ad possimus voluptatum consequuntur a totam neque labore?
        Sed. Error tempora omnis maxime nihil dicta, totam perspiciatis iure ut
        distinctio inventore praesentium enim. Ipsa perspiciatis magnam nulla
        placeat quos, totam necessitatibus ipsam quia et aut praesentium neque
        cum? Laudantium! Repudiandae, excepturi nesciunt. Unde accusantium magni
        eligendi quod? Pariatur expedita minima ducimus deserunt omnis quam
        deleniti ut repudiandae asperiores perspiciatis, fugiat in! Dignissimos
        mollitia eaque porro error veritatis inventore nesciunt. Dolores ipsa,
        voluptatum officia odio impedit sit exercitationem a, ad delectus iste
        temporibus optio tempore esse vero quod consequuntur iure, minima
        perspiciatis! Voluptates, cum voluptas. Velit aut doloribus repudiandae
        doloremque! Accusamus reprehenderit alias voluptate. Temporibus amet
        maxime quis dolor suscipit, a veniam perspiciatis saepe corrupti facere,
        sed quod. Atque quia, error eum voluptates ad ab suscipit distinctio
        commodi sequi consequatur? Aut quos veniam itaque dolorum. Perferendis
        ipsa eos repellendus, iure cupiditate excepturi similique maxime
        voluptatibus inventore fuga blanditiis illo accusantium, mollitia minus
        dolor consectetur debitis adipisci praesentium suscipit ea error.
      </p>
    </section>
  );
}
