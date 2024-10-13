
export type TTodo = {
    title: string;
    description: string;
    status: 'finished' | 'pending';
    priority: 'high' | 'medium' | 'low'
}