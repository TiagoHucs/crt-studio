import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Scenario, Step } from './scenario';

@Component({
  selector: 'app-scenario-builder',
  templateUrl: './scenario-builder.component.html',
  styleUrls: ['./scenario-builder.component.css']
})
export class ScenarioBuilderComponent implements OnInit {
  scenarioForm: FormGroup;
  scenarios: Scenario[] = [];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.criaFormulario();
  }

  criaFormulario() {
    this.scenarioForm = this.formBuilder.group({
      title: new FormControl('', [Validators.minLength(14)]),
      steps: this.formBuilder.array([]),
    });
  }


  incluiCenario(){
    this.scenarios.push(this.scenarioForm.getRawValue());
    this.scenarioForm.reset();
  }

  addStep(scenario: Scenario,descricao: string){
    let step: Step = new Step();
    step.description = descricao;
    scenario.steps.push(step);
  }

}
