import { Component, OnInit } from '@angular/core';
import { CandiateService } from '../../services/candidate/candiate.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  candidates: any[] = [];
  loading = true;
  error: string | null = null;
  selectedCandidate: any; // Property to hold the selected candidate's data

  constructor(private candidateService: CandiateService) {}

  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe(
      (data) => {
        this.candidates = data.results; // Adjust according to API response structure
        this.loading = false;
      },
      (error) => {
        this.error = error;
        this.loading = false;
      }
    );
  }

  viewResume(resumeUrl: string): void {
    if (resumeUrl) {
      window.open(resumeUrl, '_blank'); // Opens resume in a new tab
    } else {
      alert('Resume not available.');
    }
  }
}
