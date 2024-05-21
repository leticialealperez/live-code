import { ModalContent } from "../styled/Modal/ModalContent";
import { ModalDialog } from "../styled/Modal/ModalDialog";
import { Modal } from "../styled/Modal/Modal";

interface ModalProps {
	children: React.ReactNode
	display: boolean
}

export function ModalProduct(props: ModalProps) {
	return (
		<Modal display = {props.display}>
			<ModalDialog>
				<ModalContent>
					{props.children}
				</ModalContent>
			</ModalDialog>
		</Modal>
	);
}
