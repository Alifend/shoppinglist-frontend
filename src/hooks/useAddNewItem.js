import { useMutation, useQueryClient } from "@tanstack/react-query";
import ItemServices from "../services/ItemServices";
// Custom hook to add new shopping detail
const useAddNewItem = () => {
  const queryClient = useQueryClient();
  return useMutation(ItemServices.postItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["items"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useAddNewItem;
