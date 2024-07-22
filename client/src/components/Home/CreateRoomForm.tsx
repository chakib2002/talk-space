import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useFormik } from "formik";
import React, { type Dispatch, type SetStateAction } from "react";
import socket from "~/utils/socket";
import { v4 as uuidv4 } from "uuid";
import LoadingSpinner from "../common/LoadingSpinner";
import { useRouter } from "next/navigation";

const CreateRoomForm = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    onSubmit: (values) => {
      socket.emit(
        "create-room",
        uuidv4(),
        (response: { status: "ok"; token: string }) => {
          if (response.status === "ok") {
            router.push(`/${response.token}?username=${values.username}`);
          }
        },
      );
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (values.username === "") {
        errors.username = "Please Enter a Username";
      }
      return errors;
    },
  });

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create a chat room
              </ModalHeader>
              <ModalBody>
                <Input
                  value={formik.values.username}
                  onChange={(e) =>
                    formik.setFieldValue(
                      "username",
                      e.target.value.replace(/\s/g, ""),
                    )
                  }
                  labelPlacement="outside"
                  isInvalid={formik.isValid === true ? false : true}
                  size="md"
                  type="text"
                  label="Username"
                  variant="bordered"
                  color={formik.isValid === false ? "danger" : "default"}
                  placeholder="Enter your username"
                  errorMessage="Please enter a username"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={async () => {
                    await formik.validateForm().then((errors) => {
                      if (Object.keys(errors).length === 0) {
                        formik.handleSubmit();
                      }
                    });
                  }}
                >
                  {formik.isSubmitting ? <LoadingSpinner /> : "Create Room"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateRoomForm;
