module.exports = {
    verbose: true,
    bail: true,  
    collectCoverage: true,
    coverageThreshold:{            
        global:{                    
          branches:85,             
          functions:85,            
          lines:85,                
          statements:85            
        }                             
      },
    forceCoverageMatch: ["**/*.test.js"],
    collectCoverageFrom:[          
        'src/**/*.js'                
      ],
      testPathIgnorePatterns:[       
        '<rootDir>/dist',
        '<rootDir>/node_modules'      
      ],
      cacheDirectory: './cache'
}    
