export interface ChoiceImpact {
    positiveImpact: string;
    positiveInsight: string;
    negativeImpact: string;
    negativeInsight: string;
}

export interface Choice {
    id: number;
    text: string;
    impact: ChoiceImpact;
}

export interface Scenario {
    id: number;
    title: string;
    description: string;
    choices: Choice[];
}