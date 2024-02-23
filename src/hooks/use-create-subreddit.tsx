import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useCreateSubreddit = () => {
  const [input, setInput] = useState<string>("");
  const { mutate } = useMutation({
    mutationFn: async () => {
      const payload = {
        subredditName: input,
      };

      const { data } = await axios.post("/api/subreddit/", payload);
      return data;
    },
    onError: () => {},
    onSuccess: () => {},
  });
  return { input, setInput, mutate };
};

export default useCreateSubreddit;
