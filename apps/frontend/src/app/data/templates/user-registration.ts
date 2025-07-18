import { DiagramModel, TemplateModel } from '@workflow-builder/types/common';

const diagram: DiagramModel = {
  name: 'User registration diagram',
  layoutDirection: 'RIGHT',
  diagram: {
    nodes: [
      {
        id: '41fafc86-f3b5-4444-bf88-8b1866e3204e',
        type: 'node',
        position: {
          x: 12,
          y: 137,
        },
        data: {
          segments: [],
          properties: {
            label: 'New User Created',
            description: 'Trigger',
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
      },
      {
        id: '5e11be1b-8db6-4a73-9fef-4e0bdf3f4aad',
        type: 'node',
        position: {
          x: 382,
          y: 137,
        },
        data: {
          segments: [],
          properties: {
            label: 'Notify Sales Dept.',
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
        id: '91c179cb-71f5-4c14-abdc-24d17480af18',
        type: 'node',
        position: {
          x: 752,
          y: 137,
        },
        data: {
          segments: [],
          properties: {
            label: 'Send Registration Invite',
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
        id: '2b2942c5-56a2-41c6-bb3d-d653b4c314da',
        type: 'node',
        position: {
          x: 1122,
          y: 137,
        },
        data: {
          segments: [],
          properties: {
            label: 'Registration confirmed?',
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
        id: 'eea762a9-de40-4783-affe-aee7a0f02be6',
        type: 'node',
        position: {
          x: 1492,
          y: 131.5,
        },
        data: {
          segments: [],
          properties: {
            label: 'Wait for 5 Days',
            description: 'Delay',
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
        id: 'c9f39f2a-5d60-409e-bf6a-c01602583c96',
        type: 'node',
        position: {
          x: 1901,
          y: 24.5,
        },
        data: {
          segments: [],
          properties: {
            label: 'Send Second Registration',
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
        id: '8fd0bd71-81ab-4499-8cf5-7b39967aa7f8',
        type: 'node',
        position: {
          x: 2271,
          y: 131.5,
        },
        data: {
          segments: [],
          properties: {
            label: 'Second Registration Check',
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
        id: '0ce0778e-8592-4763-81be-070797bf50c2',
        type: 'node',
        position: {
          x: 2680,
          y: 262,
        },
        data: {
          segments: [],
          properties: {
            label: 'Wait for 5 Days',
            description: 'Delay',
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
        id: '862de19e-af00-4e22-aea3-f1558b9140e7',
        type: 'node',
        position: {
          x: 2679.446_718_249_934,
          y: -29.501_714_421_977_07,
        },
        data: {
          segments: [],
          properties: {
            label: 'Send Welcome Email',
            description: 'Action',
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
        id: 'cd262d84-8735-47be-8ccd-174296f2e21a',
        type: 'node',
        position: {
          x: 3050,
          y: 262,
        },
        data: {
          segments: [],
          properties: {
            label: 'End Workflow',
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
        id: '7d55e5c9-6761-4940-8559-90a0d2bfc805',
        type: 'node',
        position: {
          x: 3050,
          y: 12,
        },
        data: {
          segments: [],
          properties: {
            label: 'Update CRM',
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
    ],
    edges: [
      {
        source: '41fafc86-f3b5-4444-bf88-8b1866e3204e',
        sourceHandle: '41fafc86-f3b5-4444-bf88-8b1866e3204e-source',
        target: '5e11be1b-8db6-4a73-9fef-4e0bdf3f4aad',
        targetHandle: '5e11be1b-8db6-4a73-9fef-4e0bdf3f4aad-target',
        type: 'labelEdge',
        id: 'xy-edge__41fafc86-f3b5-4444-bf88-8b1866e3204e41fafc86-f3b5-4444-bf88-8b1866e3204e-source-5e11be1b-8db6-4a73-9fef-4e0bdf3f4aad5e11be1b-8db6-4a73-9fef-4e0bdf3f4aad-target',
        selected: false,
      },
      {
        source: '5e11be1b-8db6-4a73-9fef-4e0bdf3f4aad',
        sourceHandle: '5e11be1b-8db6-4a73-9fef-4e0bdf3f4aad-source',
        target: '91c179cb-71f5-4c14-abdc-24d17480af18',
        targetHandle: '91c179cb-71f5-4c14-abdc-24d17480af18-target',
        type: 'labelEdge',
        id: 'xy-edge__5e11be1b-8db6-4a73-9fef-4e0bdf3f4aad5e11be1b-8db6-4a73-9fef-4e0bdf3f4aad-source-91c179cb-71f5-4c14-abdc-24d17480af1891c179cb-71f5-4c14-abdc-24d17480af18-target',
        selected: false,
      },
      {
        source: '91c179cb-71f5-4c14-abdc-24d17480af18',
        sourceHandle: '91c179cb-71f5-4c14-abdc-24d17480af18-source',
        target: '2b2942c5-56a2-41c6-bb3d-d653b4c314da',
        targetHandle: '2b2942c5-56a2-41c6-bb3d-d653b4c314da-target',
        type: 'labelEdge',
        id: 'xy-edge__91c179cb-71f5-4c14-abdc-24d17480af1891c179cb-71f5-4c14-abdc-24d17480af18-source-2b2942c5-56a2-41c6-bb3d-d653b4c314da2b2942c5-56a2-41c6-bb3d-d653b4c314da-target',
        selected: false,
      },
      {
        source: '2b2942c5-56a2-41c6-bb3d-d653b4c314da',
        sourceHandle: '2b2942c5-56a2-41c6-bb3d-d653b4c314da-source',
        target: 'eea762a9-de40-4783-affe-aee7a0f02be6',
        targetHandle: 'eea762a9-de40-4783-affe-aee7a0f02be6-target',
        type: 'labelEdge',
        id: 'xy-edge__2b2942c5-56a2-41c6-bb3d-d653b4c314da2b2942c5-56a2-41c6-bb3d-d653b4c314da-source-eea762a9-de40-4783-affe-aee7a0f02be6eea762a9-de40-4783-affe-aee7a0f02be6-target',
        selected: false,
      },
      {
        source: 'eea762a9-de40-4783-affe-aee7a0f02be6',
        sourceHandle: 'eea762a9-de40-4783-affe-aee7a0f02be6-source',
        target: 'c9f39f2a-5d60-409e-bf6a-c01602583c96',
        targetHandle: 'c9f39f2a-5d60-409e-bf6a-c01602583c96-target',
        type: 'labelEdge',
        id: 'xy-edge__eea762a9-de40-4783-affe-aee7a0f02be6eea762a9-de40-4783-affe-aee7a0f02be6-source-c9f39f2a-5d60-409e-bf6a-c01602583c96c9f39f2a-5d60-409e-bf6a-c01602583c96-target',
        selected: false,
        data: {
          label: '✔️',
        },
      },
      {
        source: 'c9f39f2a-5d60-409e-bf6a-c01602583c96',
        sourceHandle: 'c9f39f2a-5d60-409e-bf6a-c01602583c96-source',
        target: '8fd0bd71-81ab-4499-8cf5-7b39967aa7f8',
        targetHandle: '8fd0bd71-81ab-4499-8cf5-7b39967aa7f8-target',
        type: 'labelEdge',
        id: 'xy-edge__c9f39f2a-5d60-409e-bf6a-c01602583c96c9f39f2a-5d60-409e-bf6a-c01602583c96-source-8fd0bd71-81ab-4499-8cf5-7b39967aa7f88fd0bd71-81ab-4499-8cf5-7b39967aa7f8-target',
        selected: false,
      },
      {
        source: '8fd0bd71-81ab-4499-8cf5-7b39967aa7f8',
        sourceHandle: '8fd0bd71-81ab-4499-8cf5-7b39967aa7f8-source',
        target: '0ce0778e-8592-4763-81be-070797bf50c2',
        targetHandle: '0ce0778e-8592-4763-81be-070797bf50c2-target',
        type: 'labelEdge',
        id: 'xy-edge__8fd0bd71-81ab-4499-8cf5-7b39967aa7f88fd0bd71-81ab-4499-8cf5-7b39967aa7f8-source-0ce0778e-8592-4763-81be-070797bf50c20ce0778e-8592-4763-81be-070797bf50c2-target',
        selected: false,
        data: {
          label: '✖️',
        },
      },
      {
        source: '8fd0bd71-81ab-4499-8cf5-7b39967aa7f8',
        sourceHandle: '8fd0bd71-81ab-4499-8cf5-7b39967aa7f8-source',
        target: '862de19e-af00-4e22-aea3-f1558b9140e7',
        targetHandle: '862de19e-af00-4e22-aea3-f1558b9140e7-target',
        type: 'labelEdge',
        id: 'xy-edge__8fd0bd71-81ab-4499-8cf5-7b39967aa7f88fd0bd71-81ab-4499-8cf5-7b39967aa7f8-source-862de19e-af00-4e22-aea3-f1558b9140e7862de19e-af00-4e22-aea3-f1558b9140e7-target',
        selected: false,
        data: {
          label: '✔️',
        },
      },
      {
        source: '0ce0778e-8592-4763-81be-070797bf50c2',
        sourceHandle: '0ce0778e-8592-4763-81be-070797bf50c2-source',
        target: 'cd262d84-8735-47be-8ccd-174296f2e21a',
        targetHandle: 'cd262d84-8735-47be-8ccd-174296f2e21a-target',
        type: 'labelEdge',
        id: 'xy-edge__0ce0778e-8592-4763-81be-070797bf50c20ce0778e-8592-4763-81be-070797bf50c2-source-cd262d84-8735-47be-8ccd-174296f2e21acd262d84-8735-47be-8ccd-174296f2e21a-target',
        selected: false,
      },
      {
        source: '862de19e-af00-4e22-aea3-f1558b9140e7',
        sourceHandle: '862de19e-af00-4e22-aea3-f1558b9140e7-source',
        target: '7d55e5c9-6761-4940-8559-90a0d2bfc805',
        targetHandle: '7d55e5c9-6761-4940-8559-90a0d2bfc805-target',
        type: 'labelEdge',
        id: 'xy-edge__862de19e-af00-4e22-aea3-f1558b9140e7862de19e-af00-4e22-aea3-f1558b9140e7-source-7d55e5c9-6761-4940-8559-90a0d2bfc8057d55e5c9-6761-4940-8559-90a0d2bfc805-target',
        selected: false,
      },
      {
        source: '2b2942c5-56a2-41c6-bb3d-d653b4c314da',
        sourceHandle: '2b2942c5-56a2-41c6-bb3d-d653b4c314da-source',
        target: '0ce0778e-8592-4763-81be-070797bf50c2',
        targetHandle: '0ce0778e-8592-4763-81be-070797bf50c2-target',
        type: 'labelEdge',
        id: 'xy-edge__2b2942c5-56a2-41c6-bb3d-d653b4c314da2b2942c5-56a2-41c6-bb3d-d653b4c314da-source-0ce0778e-8592-4763-81be-070797bf50c20ce0778e-8592-4763-81be-070797bf50c2-target',
        selected: false,
        data: {
          label: '✖️',
        },
      },
    ],
    viewport: {
      x: -16.758_416_742_493_07,
      y: 448.624_203_821_656_07,
      zoom: 0.354_868_061_874_431_26,
    },
  },
};

export const userRegistration: TemplateModel = {
  id: 2,
  name: 'User Registration',
  value: diagram,
  icon: 'UserCirclePlus',
};
