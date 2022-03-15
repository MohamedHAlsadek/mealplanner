/**
 * @generated SignedSource<<4af5ad2b8a7f7d294a872cd4a736a816>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type CategoryT = "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type Calendar_mealPlan$data = {
  readonly mealPlanEntries: {
    readonly nodes: ReadonlyArray<{
      readonly category: CategoryT;
      readonly mealId: any;
      readonly days: number;
      readonly meal: {
        readonly id: string;
        readonly nameEn: string;
        readonly nameFr: string | null;
      } | null;
    }>;
  };
  readonly " $fragmentType": "Calendar_mealPlan";
};
export type Calendar_mealPlan$key = {
  readonly " $data"?: Calendar_mealPlan$data;
  readonly " $fragmentSpreads": FragmentRefs<"Calendar_mealPlan">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Calendar_mealPlan",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": [
            "CATEGORY_ASC",
            "DAYS_ASC"
          ]
        }
      ],
      "concreteType": "MealPlanEntriesConnection",
      "kind": "LinkedField",
      "name": "mealPlanEntries",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "MealPlanEntry",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "category",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "mealId",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "days",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Meal",
              "kind": "LinkedField",
              "name": "meal",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "nameEn",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "nameFr",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "mealPlanEntries(orderBy:[\"CATEGORY_ASC\",\"DAYS_ASC\"])"
    }
  ],
  "type": "MealPlan",
  "abstractKey": null
};

(node as any).hash = "f91f38db3441d09c64fe84ed7501481f";

export default node;
