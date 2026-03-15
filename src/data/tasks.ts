// タスクの型定義
export type Task = {
    // タスクの一位識別子
    id: string;
    // 
    label: string;
};

// 
export const tasks: Task[] = [
    { id: "read", label: "読書する" },
    { id: "write", label: "書く" },
    { id: "exercise", label: "運動する" },
    { id: "sleep", label: "寝る" },
    { id: "eat", label: "食べる" },
    { id: "drink", label: "飲む" },
    { id: "shower", label: "シャワーを浴びる" },
    { id: "brush", label: "歯を磨く" },
    { id: "wash", label: "洗濯する" },
    { id: "clean", label: "掃除する" },
    { id: "cook", label: "料理する" },
]