import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureResourcesLocks implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure Resources Locks',
		name: 'N8nDevAzureResourcesLocks',
		icon: { light: 'file:./azure-resources-locks.png', dark: 'file:./azure-resources-locks.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Azure resource locks prevent unauthorized deletion or modification.',
		defaults: { name: 'Azure Resources Locks' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureResourcesLocksApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
