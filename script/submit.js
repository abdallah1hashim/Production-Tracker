const allSumbit = {};
const generalQueues = ["lidar", "lidarQA", "IMG", "IMGQA", "Training"];
const subNov = {
  sub26: {
    lidar: [],
    lidarQA: [],
    IMG: [],
    IMGQA: [],
    Training: [],
  },
  sub27: {
    lidar: [],
    lidarQA: [],
    IMG: [],
    IMGQA: [],
    Training: [],
  },
  sub28: {
    lidar: [],
    lidarQA: [],
    IMG: [],
    IMGQA: [],
    Training: [],
  },
  sub29: {
    lidar: [],
    lidarQA: [],
    IMG: [],
    IMGQA: [],
    Training: [],
  },
  sub30: {
    lidar: [0, 0, 0, 1, 0, 0, 1, 0, 3],
    lidarQA: [0, 3, 0, 0, 0, 0, 0, 0, 0],
    IMG: [0, 1, 0, 0, 0, 0, 0, 1, 0],
    IMGQA: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Training: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
};
const subDec = {
  sub1: {
    lidar: [0, 0, 0, 0, 0, 0, 0, 2, 0],
    lidarQA: [1, 7, 0, 0, 0, 0, 0, 0, 0],
    IMG: [1, 0, 0, 0, 0, 0, 0, 0, 0],
    IMGQA: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Training: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  sub2: {
    lidar: [0, 0, 2, 1, 1, 0, 1, 2, 1],
    lidarQA: [0, 6, 0, 0, 0, 0, 0, 0, 0],
    IMG: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    IMGQA: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Training: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  sub3: {
    lidar: [0, 1, 0, 1, 1, 0, 2, 2, 2],
    lidarQA: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    IMG: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    IMGQA: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Training: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  sub4: {
    lidar: [0, 1, 0, 0, 1, 0, 0, 2, 2],
    lidarQA: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    IMG: [0, 0, 0, 0, 0, 0, 1, 0, 0],
    IMGQA: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Training: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  sub5: {
    lidar: [1, 1, 0, 0, 1, 0, 1, 2, 1],
    lidarQA: [3, 6, 0, 0, 0, 0, 0, 0, 0],
    IMG: [1, 0, 0, 0, 0, 0, 0, 0, 1],
    IMGQA: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Training: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  sub6: {
    lidar: [0, 1, 0, 0, 0, 0, 1, 0, 0],
    lidarQA: [0, 2, 0, 0, 0, 0, 0, 0, 0],
    IMG: [3, 0, 0, 1, 0, 0, 0, 0, 3],
    IMGQA: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Training: [0, 1, 1, 0, 0, 0, 0, 1, 0],
  },
  sub7: {
    lidar: [0, 0, 1, 0, 2, 0, 0, 3, 0],
    lidarQA: [0, 4, 0, 0, 0, 0, 0, 0, 0],
    IMG: [2, 0, 0, 3, 0, 0, 0, 0, 0],
    IMGQA: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Training: [1, 0, 0, 1, 1, 0, 0, 1, 0],
  },
};
allSumbit.November = subNov;
allSumbit.December = subDec;
