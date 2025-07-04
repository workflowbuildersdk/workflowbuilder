import { DiagramModel, TemplateModel } from '@workflow-builder/types/common';

const defaultDiagram: DiagramModel = {
  name: 'Simple workflow diagram',
  layoutDirection: 'RIGHT',
  diagram: {
    nodes: [
      {
        id: '440ccd46-0f50-4e35-ae74-64fee988a4f6',
        type: 'node',
        position: {
          x: 12,
          y: 137,
        },
        data: {
          segments: [],
          properties: {
            label: 'Start Workflow',
            description: 'Trigger',
            title: 'Trigger',
            subtitle: 'Initiate workflows',
            dataSource: 'Time-based Trigger',
          },
          type: 'trigger',
          icon: 'Lightning',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
        dragging: false,
      },
      {
        id: 'da47caa9-c695-47bb-be52-b30bb8a6be6d',
        type: 'node',
        position: {
          x: 382,
          y: 137,
        },
        data: {
          segments: [],
          properties: {
            label: 'Check Client Source',
            description: 'Conditional',
            title: 'Conditional',
            subtitle: 'Branch the workflow',
          },
          type: 'conditional',
          icon: 'ListChecks',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
        dragging: false,
      },
      {
        id: '47375954-4e4a-4567-b7d3-c70c3921e1dd',
        type: 'node',
        position: {
          x: 869,
          y: 12,
        },
        data: {
          segments: [],
          properties: {
            label: 'Notify Platform',
            description: 'Action',
            title: 'Send E-mail',
            subtitle: 'Send E-mail Action',
          },
          type: 'action',
          icon: 'PlayCircle',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
        dragging: false,
      },
      {
        id: 'e7ecd597-55ca-4bba-9d32-d0c51173046d',
        type: 'node',
        position: {
          x: 1239,
          y: 137,
        },
        data: {
          segments: [],
          properties: {
            label: 'Recurring Customer?',
            description: 'Decision',
            title: 'Decision',
            subtitle: 'Route the workflow',
          },
          type: 'decision',
          icon: 'ArrowsSplit',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
        dragging: false,
      },
      {
        id: '798dbba1-d356-4fcd-8ba2-90e75f4912f9',
        type: 'node',
        position: {
          x: 869,
          y: 262,
        },
        data: {
          segments: [],
          properties: {
            label: 'Confirm Request',
            description: 'Action',
            title: 'Send E-mail',
            subtitle: 'Send E-mail Action',
          },
          type: 'action',
          icon: 'PlayCircle',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
      },
      {
        id: '801b6f56-05d9-4639-b426-ef171741a408',
        type: 'node',
        position: {
          x: 1609,
          y: 12,
        },
        data: {
          segments: [],
          properties: {
            label: 'Wait and proceed',
            description: 'Fixed delay',
            title: 'Wait and proceed',
            subtitle: 'Description',
            delayType: 'Fixed delay',
            status: 'Active',
            delayTimeUnit: 'Seconds',
            delayAmount: 5,
          },
          type: 'delay',
          icon: 'Timer',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
        dragging: false,
      },
      {
        id: 'fd7745bf-4562-447f-a65c-2581b6a77eac',
        type: 'node',
        position: {
          x: 1979,
          y: 137,
        },
        data: {
          segments: [],
          properties: {
            label: 'Check Contact Reason',
            description: 'Conditional',
            title: 'Conditional',
            subtitle: 'Branch the workflow',
          },
          type: 'conditional',
          icon: 'ListChecks',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
      },
      {
        id: 'c87efe62-6394-43c2-8714-96c0dc19a407',
        type: 'node',
        position: {
          x: 1609,
          y: 262,
        },
        data: {
          segments: [],
          properties: {
            label: 'Create CRM Record',
            description: 'Performs tasks',
            title: 'Send E-mail',
            subtitle: 'Send E-mail Action',
          },
          type: 'action',
          icon: 'PlayCircle',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
      },
      {
        id: '3bfaad20-c0b8-4a90-bf8b-04c3eec2ce31',
        type: 'node',
        position: {
          x: 2349,
          y: 12,
        },
        data: {
          segments: [],
          properties: {
            label: 'Track the product',
            description: 'Action',
            title: 'Send E-mail',
            subtitle: 'Send E-mail Action',
          },
          type: 'action',
          icon: 'PlayCircle',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
      },
      {
        id: '8b356b4a-5959-48ff-9374-cd07dc9522f6',
        type: 'node',
        position: {
          x: 2349,
          y: 262,
        },
        data: {
          segments: [],
          properties: {
            label: 'Product or Service?',
            description: 'Decision',
            title: 'Decision',
            subtitle: 'Route the workflow',
          },
          type: 'decision',
          icon: 'ArrowsSplit',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
      },
      {
        id: 'abac90c2-af48-458e-8e0c-48a505d0826e',
        type: 'node',
        position: {
          x: 2790,
          y: 24.5,
        },
        data: {
          segments: [],
          properties: {
            label: 'Wait 24 Hours',
            description: 'Fixed Delay',
            title: 'Delay',
            subtitle: 'Description',
            delayType: 'Fixed delay',
            status: 'Active',
            delayTimeUnit: 'Seconds',
            delayAmount: 5,
          },
          type: 'delay',
          icon: 'Timer',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
        dragging: false,
      },
      {
        id: '33bfbf0d-f0eb-452e-aeba-f330bb9badec',
        type: 'node',
        position: {
          x: 3160,
          y: 137,
        },
        data: {
          segments: [],
          properties: {
            label: 'Process Complaint',
            description: 'Action',
            title: 'Send E-mail',
            subtitle: 'Send E-mail Action',
          },
          type: 'action',
          icon: 'PlayCircle',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
      },
      {
        id: '263e749c-dfaa-4aed-af11-c7ad161aee54',
        type: 'node',
        position: {
          x: 3530,
          y: 137,
        },
        data: {
          segments: [],
          properties: {
            label: 'Refund or reject claim',
            description: 'Decision',
            title: 'Decision',
            subtitle: 'Route the workflow',
          },
          type: 'decision',
          icon: 'ArrowsSplit',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
      },
      {
        id: 'caae31f8-9bf6-4488-addf-d1b80842e1f7',
        type: 'node',
        position: {
          x: 3966,
          y: 12,
        },
        data: {
          segments: [],
          properties: {
            label: 'Notify customer',
            description: 'Notification',
            title: 'Notification',
            subtitle: 'Send notification',
          },
          type: 'notification',
          icon: 'PaperPlaneRight',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
      },
      {
        id: 'c125ce95-d5f4-4a93-a9de-407e45016d8d',
        type: 'node',
        position: {
          x: 3966,
          y: 262,
        },
        data: {
          segments: [],
          properties: {
            label: 'Notify customer',
            description: 'Notification',
            title: 'Notification',
            subtitle: 'Send notification',
          },
          type: 'notification',
          icon: 'PaperPlaneRight',
        },
        selected: false,
        measured: {
          width: 259,
          height: 55,
        },
        dragging: false,
      },
    ],
    edges: [
      {
        source: '440ccd46-0f50-4e35-ae74-64fee988a4f6',
        sourceHandle: '440ccd46-0f50-4e35-ae74-64fee988a4f6-source',
        target: 'da47caa9-c695-47bb-be52-b30bb8a6be6d',
        targetHandle: 'da47caa9-c695-47bb-be52-b30bb8a6be6d-target',
        type: 'labelEdge',
        id: 'xy-edge__440ccd46-0f50-4e35-ae74-64fee988a4f6440ccd46-0f50-4e35-ae74-64fee988a4f6-source-da47caa9-c695-47bb-be52-b30bb8a6be6dda47caa9-c695-47bb-be52-b30bb8a6be6d-target',
        selected: false,
      },
      {
        source: 'da47caa9-c695-47bb-be52-b30bb8a6be6d',
        sourceHandle: 'da47caa9-c695-47bb-be52-b30bb8a6be6d-source',
        target: '47375954-4e4a-4567-b7d3-c70c3921e1dd',
        targetHandle: '47375954-4e4a-4567-b7d3-c70c3921e1dd-target',
        type: 'labelEdge',
        id: 'xy-edge__da47caa9-c695-47bb-be52-b30bb8a6be6dda47caa9-c695-47bb-be52-b30bb8a6be6d-source-47375954-4e4a-4567-b7d3-c70c3921e1dd47375954-4e4a-4567-b7d3-c70c3921e1dd-target',
        selected: false,
        data: {
          label: 'Our website',
        },
      },
      {
        source: '47375954-4e4a-4567-b7d3-c70c3921e1dd',
        sourceHandle: '47375954-4e4a-4567-b7d3-c70c3921e1dd-source',
        target: 'e7ecd597-55ca-4bba-9d32-d0c51173046d',
        targetHandle: 'e7ecd597-55ca-4bba-9d32-d0c51173046d-target',
        type: 'labelEdge',
        id: 'xy-edge__47375954-4e4a-4567-b7d3-c70c3921e1dd47375954-4e4a-4567-b7d3-c70c3921e1dd-source-e7ecd597-55ca-4bba-9d32-d0c51173046de7ecd597-55ca-4bba-9d32-d0c51173046d-target',
        selected: false,
      },
      {
        source: 'da47caa9-c695-47bb-be52-b30bb8a6be6d',
        sourceHandle: 'da47caa9-c695-47bb-be52-b30bb8a6be6d-source',
        target: '798dbba1-d356-4fcd-8ba2-90e75f4912f9',
        targetHandle: '798dbba1-d356-4fcd-8ba2-90e75f4912f9-target',
        type: 'labelEdge',
        id: 'xy-edge__da47caa9-c695-47bb-be52-b30bb8a6be6dda47caa9-c695-47bb-be52-b30bb8a6be6d-source-798dbba1-d356-4fcd-8ba2-90e75f4912f9798dbba1-d356-4fcd-8ba2-90e75f4912f9-target',
        selected: false,
        data: {
          label: 'Partner website',
        },
      },
      {
        source: '798dbba1-d356-4fcd-8ba2-90e75f4912f9',
        sourceHandle: '798dbba1-d356-4fcd-8ba2-90e75f4912f9-source',
        target: 'e7ecd597-55ca-4bba-9d32-d0c51173046d',
        targetHandle: 'e7ecd597-55ca-4bba-9d32-d0c51173046d-target',
        type: 'labelEdge',
        id: 'xy-edge__798dbba1-d356-4fcd-8ba2-90e75f4912f9798dbba1-d356-4fcd-8ba2-90e75f4912f9-source-e7ecd597-55ca-4bba-9d32-d0c51173046de7ecd597-55ca-4bba-9d32-d0c51173046d-target',
        selected: false,
      },
      {
        source: 'e7ecd597-55ca-4bba-9d32-d0c51173046d',
        sourceHandle: 'e7ecd597-55ca-4bba-9d32-d0c51173046d-source',
        target: '801b6f56-05d9-4639-b426-ef171741a408',
        targetHandle: '801b6f56-05d9-4639-b426-ef171741a408-target',
        type: 'labelEdge',
        id: 'xy-edge__e7ecd597-55ca-4bba-9d32-d0c51173046de7ecd597-55ca-4bba-9d32-d0c51173046d-source-801b6f56-05d9-4639-b426-ef171741a408801b6f56-05d9-4639-b426-ef171741a408-target',
        selected: false,
        data: {
          label: '✔️',
        },
      },
      {
        source: '801b6f56-05d9-4639-b426-ef171741a408',
        sourceHandle: '801b6f56-05d9-4639-b426-ef171741a408-source',
        target: 'fd7745bf-4562-447f-a65c-2581b6a77eac',
        targetHandle: 'fd7745bf-4562-447f-a65c-2581b6a77eac-target',
        type: 'labelEdge',
        id: 'xy-edge__801b6f56-05d9-4639-b426-ef171741a408801b6f56-05d9-4639-b426-ef171741a408-source-fd7745bf-4562-447f-a65c-2581b6a77eacfd7745bf-4562-447f-a65c-2581b6a77eac-target',
        selected: false,
      },
      {
        source: 'e7ecd597-55ca-4bba-9d32-d0c51173046d',
        sourceHandle: 'e7ecd597-55ca-4bba-9d32-d0c51173046d-source',
        target: 'c87efe62-6394-43c2-8714-96c0dc19a407',
        targetHandle: 'c87efe62-6394-43c2-8714-96c0dc19a407-target',
        type: 'labelEdge',
        id: 'xy-edge__e7ecd597-55ca-4bba-9d32-d0c51173046de7ecd597-55ca-4bba-9d32-d0c51173046d-source-c87efe62-6394-43c2-8714-96c0dc19a407c87efe62-6394-43c2-8714-96c0dc19a407-target',
        selected: false,
        data: {
          label: '✖️',
        },
      },
      {
        source: 'c87efe62-6394-43c2-8714-96c0dc19a407',
        sourceHandle: 'c87efe62-6394-43c2-8714-96c0dc19a407-source',
        target: 'fd7745bf-4562-447f-a65c-2581b6a77eac',
        targetHandle: 'fd7745bf-4562-447f-a65c-2581b6a77eac-target',
        type: 'labelEdge',
        id: 'xy-edge__c87efe62-6394-43c2-8714-96c0dc19a407c87efe62-6394-43c2-8714-96c0dc19a407-source-fd7745bf-4562-447f-a65c-2581b6a77eacfd7745bf-4562-447f-a65c-2581b6a77eac-target',
        selected: false,
      },
      {
        source: 'fd7745bf-4562-447f-a65c-2581b6a77eac',
        sourceHandle: 'fd7745bf-4562-447f-a65c-2581b6a77eac-source',
        target: '3bfaad20-c0b8-4a90-bf8b-04c3eec2ce31',
        targetHandle: '3bfaad20-c0b8-4a90-bf8b-04c3eec2ce31-target',
        type: 'labelEdge',
        id: 'xy-edge__fd7745bf-4562-447f-a65c-2581b6a77eacfd7745bf-4562-447f-a65c-2581b6a77eac-source-3bfaad20-c0b8-4a90-bf8b-04c3eec2ce313bfaad20-c0b8-4a90-bf8b-04c3eec2ce31-target',
        selected: false,
      },
      {
        source: 'fd7745bf-4562-447f-a65c-2581b6a77eac',
        sourceHandle: 'fd7745bf-4562-447f-a65c-2581b6a77eac-source',
        target: '8b356b4a-5959-48ff-9374-cd07dc9522f6',
        targetHandle: '8b356b4a-5959-48ff-9374-cd07dc9522f6-target',
        type: 'labelEdge',
        id: 'xy-edge__fd7745bf-4562-447f-a65c-2581b6a77eacfd7745bf-4562-447f-a65c-2581b6a77eac-source-8b356b4a-5959-48ff-9374-cd07dc9522f68b356b4a-5959-48ff-9374-cd07dc9522f6-target',
        selected: false,
      },
      {
        source: '8b356b4a-5959-48ff-9374-cd07dc9522f6',
        sourceHandle: '8b356b4a-5959-48ff-9374-cd07dc9522f6-source',
        target: 'abac90c2-af48-458e-8e0c-48a505d0826e',
        targetHandle: 'abac90c2-af48-458e-8e0c-48a505d0826e-target',
        type: 'labelEdge',
        id: 'xy-edge__8b356b4a-5959-48ff-9374-cd07dc9522f68b356b4a-5959-48ff-9374-cd07dc9522f6-source-abac90c2-af48-458e-8e0c-48a505d0826eabac90c2-af48-458e-8e0c-48a505d0826e-target',
        selected: false,
        data: {
          label: 'Product',
        },
      },
      {
        source: '8b356b4a-5959-48ff-9374-cd07dc9522f6',
        sourceHandle: '8b356b4a-5959-48ff-9374-cd07dc9522f6-source',
        target: '33bfbf0d-f0eb-452e-aeba-f330bb9badec',
        targetHandle: '33bfbf0d-f0eb-452e-aeba-f330bb9badec-target',
        type: 'labelEdge',
        id: 'xy-edge__8b356b4a-5959-48ff-9374-cd07dc9522f68b356b4a-5959-48ff-9374-cd07dc9522f6-source-33bfbf0d-f0eb-452e-aeba-f330bb9badec33bfbf0d-f0eb-452e-aeba-f330bb9badec-target',
        selected: false,
        data: {
          label: 'Service',
        },
      },
      {
        source: 'abac90c2-af48-458e-8e0c-48a505d0826e',
        sourceHandle: 'abac90c2-af48-458e-8e0c-48a505d0826e-source',
        target: '33bfbf0d-f0eb-452e-aeba-f330bb9badec',
        targetHandle: '33bfbf0d-f0eb-452e-aeba-f330bb9badec-target',
        type: 'labelEdge',
        id: 'xy-edge__abac90c2-af48-458e-8e0c-48a505d0826eabac90c2-af48-458e-8e0c-48a505d0826e-source-33bfbf0d-f0eb-452e-aeba-f330bb9badec33bfbf0d-f0eb-452e-aeba-f330bb9badec-target',
        selected: false,
      },
      {
        source: '33bfbf0d-f0eb-452e-aeba-f330bb9badec',
        sourceHandle: '33bfbf0d-f0eb-452e-aeba-f330bb9badec-source',
        target: '263e749c-dfaa-4aed-af11-c7ad161aee54',
        targetHandle: '263e749c-dfaa-4aed-af11-c7ad161aee54-target',
        type: 'labelEdge',
        id: 'xy-edge__33bfbf0d-f0eb-452e-aeba-f330bb9badec33bfbf0d-f0eb-452e-aeba-f330bb9badec-source-263e749c-dfaa-4aed-af11-c7ad161aee54263e749c-dfaa-4aed-af11-c7ad161aee54-target',
        selected: false,
      },
      {
        source: '263e749c-dfaa-4aed-af11-c7ad161aee54',
        sourceHandle: '263e749c-dfaa-4aed-af11-c7ad161aee54-source',
        target: 'caae31f8-9bf6-4488-addf-d1b80842e1f7',
        targetHandle: 'caae31f8-9bf6-4488-addf-d1b80842e1f7-target',
        type: 'labelEdge',
        id: 'xy-edge__263e749c-dfaa-4aed-af11-c7ad161aee54263e749c-dfaa-4aed-af11-c7ad161aee54-source-caae31f8-9bf6-4488-addf-d1b80842e1f7caae31f8-9bf6-4488-addf-d1b80842e1f7-target',
        selected: false,
        data: {
          label: 'Refund',
        },
      },
      {
        source: '263e749c-dfaa-4aed-af11-c7ad161aee54',
        sourceHandle: '263e749c-dfaa-4aed-af11-c7ad161aee54-source',
        target: 'c125ce95-d5f4-4a93-a9de-407e45016d8d',
        targetHandle: 'c125ce95-d5f4-4a93-a9de-407e45016d8d-target',
        type: 'labelEdge',
        id: 'xy-edge__263e749c-dfaa-4aed-af11-c7ad161aee54263e749c-dfaa-4aed-af11-c7ad161aee54-source-c125ce95-d5f4-4a93-a9de-407e45016d8dc125ce95-d5f4-4a93-a9de-407e45016d8d-target',
        selected: false,
        data: {
          label: 'Reject',
        },
      },
    ],
    viewport: {
      x: -770.524_553_341_52,
      y: 248.249_620_915_575_46,
      zoom: 0.915_958_819_428_924_9,
    },
  },
};

export const simpleFlow: TemplateModel = {
  id: 1,
  name: 'Simple Workflow',
  value: defaultDiagram,
  icon: 'TreeStructure',
};
