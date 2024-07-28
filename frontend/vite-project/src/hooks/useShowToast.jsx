import { useToast } from "@chakra-ui/toast";
import { useCallback } from "react";

const useShowToast = () => {
	const toast = useToast();

	const showToast = useCallback(
		(description, status) => {
			toast({
				description,
				duration: 3000,
				isClosable: true,
			});
		},
		[toast]
	);

	return showToast;
};

export default useShowToast;