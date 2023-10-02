import supabase from "./supabase";

export const getCabins = async () => {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabin could not be loaded");
  }

  return cabins;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("cabin could not be deleted");
  }

  return data;
};

export const createCabin = async (newCabin) => {
  const { data, error } = await supabase.from("cabins").insert([newCabin]);
  if (error) {
    console.error(error);
    throw new Error("cabin could not be created");
  }

  return data;
};
