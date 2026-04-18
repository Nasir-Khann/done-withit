import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import listingsApi from "../../api/listings";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormikField,
  AppFormPicker,
  SubmitButton,
} from "../components/form";
import CategoryItems from "../components/CategoryItems";
import FormImagePicker from "../components/form/FormImagePicker";
import UploadScreen from "./UploadScreen";

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.number().required().min(1).max(1000).label("Price"),
  description: yup.string().label("Description"),
  category: yup.object().required().label("Category"),
  images: yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#E86B6B",
    icon: "table-furniture",
  },
  {
    label: "Cars",
    value: 2,
    backgroundColor: "#F2A24B",
    icon: "car",
  },
  {
    label: "Cameras",
    value: 3,
    backgroundColor: "#F3D25B",
    icon: "camera",
  },
  {
    label: "Games",
    value: 4,
    backgroundColor: "#57C77A",
    icon: "cards",
  },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#4CC7B7",
    icon: "shoe-heel",
  },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "#66AEEA",
    icon: "basketball",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#4E77E6",
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "#8B5CF6",
    icon: "book-open-variant",
  },
  {
    label: "Other",
    value: 9,
    backgroundColor: "#8B98A8",
    icon: "apps",
  },
];

export default function ListingEditScreen() {
  const navigation = useNavigation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgess] = useState(0);

  const handleUploadDone = () => {
    setUploadVisible(false);
    navigation.navigate("Feed");
  };

  const handleSubmit = async (listing, { resetForm }) => {
    setProgess(0);
    setUploadVisible(true);

    const result = await listingsApi.addListing(listing, (progress) => {
      console.log("upload progress:", progress);
      setProgess(progress);
    });

    console.log("addListing response:", {
      ok: result.ok,
      status: result.status,
      problem: result.problem,
      data: result.data,
    });

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }

    setProgess(1);
    resetForm();
  };

  return (
    <Screen style={styles.main}>
      <UploadScreen
        onDone={handleUploadDone}
        progress={progress}
        visible={uploadVisible}
      />

      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />

        <AppFormikField maxLength={255} name="title" placeholder="Title" />

        <AppFormikField
          width={120}
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />

        <AppFormPicker
          width={200}
          PickerItemComponent={CategoryItems}
          numberOfColumns={3}
          items={categories}
          name="category"
          placeholder="Category"
        />

        <AppFormikField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {},
});
