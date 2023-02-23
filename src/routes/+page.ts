import type { Load } from "@sveltejs/kit";

export const load: Load = async () => {
 

  return {
    post: {
      title: `Title for  goes here`,
      content: `Content for  goes here`,
    },
  };
};
