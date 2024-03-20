import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups:[{
    _id: "65edb750d9d44a17c491cb78",
    title: "Exp1",
    members: [
      "65edb66ad9d44a17c491cb68",
      "65edb67dd9d44a17c491cb6b",
      "65edb691d9d44a17c491cb6e",
    ],
    invitedUsers: [],
    currency: "INR",
    __v: 0,
  },
  {
    _id: "65edb7aad9d44a17c491cb7c",
    title: "Exp2",
    members: [
      "65edb66ad9d44a17c491cb68",
      "65edb648d9d44a17c491cb65",
      "65edb691d9d44a17c491cb6e",
    ],
    invitedUsers: [],
    currency: "INR",
    __v: 0,
  },
  {
    _id: "65edb8a3d9d44a17c491cb8a",
    title: "Exp4",
    members: [
      "65edb648d9d44a17c491cb65",
      "65edb691d9d44a17c491cb6e",
      "65edb66ad9d44a17c491cb68",
    ],
    invitedUsers: [],
    currency: "INR",
    __v: 0,
  },
]};

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    addGroup: (state, action) => {
      const group = {
        _id: "65edb7aad9d44a17c491cb7cmeet",
        title: action.payload,
        members: [
          "65edb66ad9d44a17c491cb68",
          "65edb648d9d44a17c491cb65",
          "65edb691d9d44a17c491cb6e",
        ],
        invitedUsers: [],
        currency: "INR",
        __v: 0,
      };

      state.push(group);
    },
  },
});

export const { addGroup } = groupSlice.actions;

export default groupSlice.reducer;
