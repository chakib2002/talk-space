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
import LoadingSpinner from "../common/LoadingSpinner";
import { useRouter } from "next/navigation";

const JoinRoomForm = ({
  isOpen,
  onOpenChange,
  token,
}: {
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  token: string;
}) => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    onSubmit: (values) => {
      socket.emit(
        "join-room",
        token,
        (response: { status: "ok" | "not found"; token?: string }) => {
          if (response.status === "ok") {
            router.push(`/${response.token}?username=${values.username}`);
          } else {
            alert("Room not found");
            formik.setSubmitting(false);
            onOpenChange(false);
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
                Join a Chat Room
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
                  {formik.isSubmitting ? <LoadingSpinner /> : "Join Room"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default JoinRoomForm;
