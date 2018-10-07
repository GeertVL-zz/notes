# improvements for input component

## How to organize them.

- The first thing that I see that css that is specific for a certain component is still set in the global css. 
- We need basic components where we can built on to make specific custom version for a specific case. Adding more and more attributes for every case that is possible that is not the right solution. You need to inherit from our base input component and add to that child your special customizations. 
The base or parent components need to be as pure as possible. 







## Remarks on the existing code

- Sometimes I see a scss file created but not even declared or used in the component implementation.

