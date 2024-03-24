export function generateUniqueRandomId(): number {
    const min = 100000; // 最小值
    const max = 999999; // 最大值
    const idSet = new Set<number>(); // 用于存储已生成的 ID
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!idSet.has(randomId)) {
        // 如果生成的 ID 不在集合中，则返回它
        idSet.add(randomId);
        return randomId;
      }
    }
  }