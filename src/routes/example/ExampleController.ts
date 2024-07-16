import {
    Controller,
    Get,
    Route,
    SuccessResponse,
    Tags,
  } from '@tsoa/runtime';
  import { StatusCodes } from 'http-status-codes';
  import ExampleModel from '../../database/models/ExampleModel';
  import { ExampleAttributes } from '../../interfaces/ExampleAttributes';
  
  export type ExampleResponse = boolean;
  
  @Route('v1/example')
  @Tags('Example')
  class ExampleController extends Controller {
    @Get('/examples')
    @SuccessResponse(StatusCodes.OK)
    public async getAllExamples(): Promise<ExampleAttributes[]> {
      const examples = await ExampleModel.findAll();
      return examples as ExampleAttributes[];
    }
  }
  
  export default ExampleController;
  